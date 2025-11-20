export default async function handler(req, res) {
  try {
    const response = await fetch("https://eclipse-products-backend.vercel.app/api/products/all", {
      cache: "force-cache",
      next: { revalidate: 60 }, // cache for 60 sec
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server Error" });
  }
}
