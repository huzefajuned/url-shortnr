// pages/api/shorten.js
import { NextRequest } from "next/server";
import { connectDB } from "../db/connection";
import { UrlModel } from "../model/url.model";
import { nanoid } from "nanoid";

// CREATE NEW SHORT URL
export async function POST(req: NextRequest) {
  // const _data = await req.headers;


  // console.log('type of _data ', _data.Headers)



  // console.log(' _data ',_data['Headers'])
  try {
    // DB Connction check
    await connectDB();

    // pickup the originla url form  req body
    const body = await req.json();
    const originalUrl = (await body?.url) || "";

    // loging originalUrl
    console.log("originalUrl in server :", originalUrl);

    if (!originalUrl) {
      return new Response("URL is required", { status: 400 });
    }

    // Check if URL already exists
    const alreadyExists = await UrlModel.findOne({ originalUrl });
    if (alreadyExists) {
      return new Response(
        JSON.stringify({
          shortUrl: alreadyExists.shortUrl,
          message: "URL already exixts!",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // if not already exists ,
    // then  Generate short URL
    const shortUrl = nanoid(8); // Generates an 8-character unique ID
    const newUrl = UrlModel.create({ originalUrl, shortUrl });
    // await UrlModel.save();

    return new Response(JSON.stringify({ newUrl, message: "URL  created!" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST /shorten:", error);
    return new Response("Server Error", { status: 500 });
  }
}

// GET SHORT URLS
export async function GET() {
  try {
    // DB Connction check
    await connectDB();
    console.log(" GET call");

    //  for now i am fetching all urls in one
    //  later i'll add pagination
    const urls = await UrlModel.find();

    return new Response(JSON.stringify({ urls, message: "URLs fetched!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET / retrieve urls:", error);
    return new Response("Server Error", { status: 500 });
  }
}
