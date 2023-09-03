import { NextResponse } from "next/server";

export async function POST(request) {
  const country = await request.json();

  const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${country}&count=10&language=en&format=json`;

  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(endpoint, config);
  const data = await res.json();
  // console.log(data);

  return NextResponse.json(data.results);
}
