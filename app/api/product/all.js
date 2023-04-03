// export async function GET(request) {
//     return new Response('Hello, Next.js!')
//   }
export default function handler(req, res){
    res.status(200).json({success: true, products: []})
}