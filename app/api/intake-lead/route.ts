import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "rajesh@delipat.com";
const STORAGE_KEY = "delipat:intake-popup:v1";

type IntakeLeadPayload = {
  email?: unknown;
  pageUrl?: unknown;
  submittedAt?: unknown;
  timezone?: unknown;
  localStorageKey?: unknown;
};

type IntakeLeadRecord = {
  email: string;
  pageUrl: string;
  submittedAt: string;
  timezone: string;
  localStorageKey: string;
  userAgent: string;
  ip: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseEmailList(value: string | undefined) {
  return value
    ? value
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean)
    : undefined;
}

function createEmailBody(lead: IntakeLeadRecord) {
  const submittedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(lead.submittedAt));

  const leadRows = [
    ["Subscriber email", lead.email],
    ["Submitted at", `${submittedDate} UTC`],
    ["Visitor timezone", lead.timezone],
    ["Source page", lead.pageUrl],
  ];

  const technicalRows = [
    ["Timezone", lead.timezone],
    ["Local storage key", lead.localStorageKey],
    ["User agent", lead.userAgent],
    ["IP", lead.ip],
  ];

  const createRows = (rows: string[][]) =>
    rows
    .map(([label, value]) => {
      return `<tr><td style="padding:12px 14px;border-bottom:1px solid #E8EAEE;font-weight:700;color:#0A1628;width:190px;">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #E8EAEE;color:#233247;">${escapeHtml(value)}</td></tr>`;
    })
    .join("");

  const textRows = [
    "New Delipat subscriber",
    "",
    `Email: ${lead.email}`,
    `Submitted at: ${submittedDate} UTC`,
    `Source page: ${lead.pageUrl}`,
    `Visitor timezone: ${lead.timezone}`,
    "",
    "Suggested next step: add this contact to the Delipat updates list and follow up if they look like a qualified PI firm owner/operator.",
    "",
    "Technical context:",
    `Local storage key: ${lead.localStorageKey}`,
    `User agent: ${lead.userAgent}`,
    `IP: ${lead.ip}`,
  ];

  return {
    subject: `New Delipat subscriber: ${lead.email}`,
    text: textRows.join("\n"),
    html: `
      <div style="margin:0;background:#F6F7F8;padding:28px;font-family:Arial,sans-serif;color:#233247;line-height:1.55;">
        <div style="max-width:720px;margin:0 auto;background:#FFFFFF;border:1px solid #E8EAEE;border-radius:16px;overflow:hidden;">
          <div style="background:#0A1628;padding:24px 28px;color:#FFFFFF;">
            <p style="margin:0 0 8px;color:#F3DE91;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Delipat popup subscription</p>
            <h1 style="margin:0;font-size:24px;line-height:1.2;">New subscriber received</h1>
          </div>

          <div style="padding:26px 28px;">
            <p style="margin:0 0 18px;font-size:16px;color:#233247;">
              A visitor subscribed to Delipat updates from the website popup.
            </p>

            <div style="margin:0 0 22px;padding:16px 18px;border-radius:12px;background:#FAF7EC;border:1px solid #EFE2B8;">
              <p style="margin:0;color:#0A1628;font-size:14px;font-weight:700;">Suggested next step</p>
              <p style="margin:6px 0 0;color:#4A5568;font-size:14px;">Add this contact to the updates list and review whether they should be followed up with directly.</p>
            </div>

            <table style="border-collapse:collapse;width:100%;margin:0 0 24px;border-top:1px solid #E8EAEE;">${createRows(leadRows)}</table>

            <p style="margin:0 0 10px;color:#0A1628;font-size:14px;font-weight:700;">Technical context</p>
            <table style="border-collapse:collapse;width:100%;border-top:1px solid #E8EAEE;">${createRows(technicalRows)}</table>
          </div>
        </div>
      </div>
    `,
  };
}

async function persistLeadForDatabaseLater(lead: IntakeLeadRecord) {
  void lead;
  // Database write belongs here when the project has a DB connection.
  // Keep the IntakeLeadRecord shape stable so this route can be wired to a table later.
}

async function sendLeadEmail(lead: IntakeLeadRecord) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_APP_PASSWORD;
  const from = process.env.POPUP_EMAIL_FROM || (user ? `Delipat Intake <${user}>` : "");
  const to = process.env.POPUP_EMAIL_TO || RECIPIENT_EMAIL;
  const cc = parseEmailList(process.env.POPUP_EMAIL_CC);

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP email settings are not configured.");
  }

  const emailBody = createEmailBody(lead);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
      from,
      to,
      cc,
      replyTo: lead.email,
      subject: emailBody.subject,
      text: emailBody.text,
      html: emailBody.html,
  });
}

export async function POST(request: Request) {
  let payload: IntakeLeadPayload;

  try {
    payload = (await request.json()) as IntakeLeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const lead: IntakeLeadRecord = {
    email,
    pageUrl: typeof payload.pageUrl === "string" ? payload.pageUrl : "Unknown",
    submittedAt: typeof payload.submittedAt === "string" ? payload.submittedAt : new Date().toISOString(),
    timezone: typeof payload.timezone === "string" ? payload.timezone : "Unknown",
    localStorageKey: typeof payload.localStorageKey === "string" ? payload.localStorageKey : STORAGE_KEY,
    userAgent: request.headers.get("user-agent") || "Unknown",
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "Unknown",
  };

  try {
    await persistLeadForDatabaseLater(lead);
    await sendLeadEmail(lead);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to send lead email.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
