import type { NextRequest } from "next/server";
import { connectDB } from "../db/connection";
import { isValidUrl } from "@/app/lib/common";
import { UrlModel } from "../model/url.model";

export async function POST(req: NextRequest) {
  try {
    // DB Connction check
    await connectDB();

    // pickup the originla url form  req body
    const body = await req.json();
    const shortUrl = await body.shortUrl;

    // validate the url in server
    if (isValidUrl(shortUrl)) {
      console.log("shortUrl is :", shortUrl);

      // Check if URL already exists
      const originalUrl = await UrlModel.findOne({ shortUrl });
      if (originalUrl) {
        return new Response(
          JSON.stringify({
            originalUrl,
            message: "redirecting please wait! ⌛⌛",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }
  } catch (error) {
    console.log("error in redirect", error);
  }
}
