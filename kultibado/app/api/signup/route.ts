import { NextResponse } from "next/server";
import Buyer from "@/lib/models/buyer";
import connect from "@/lib/db";

export const POST = async (req: Request) => {

    const body = await req.json();
    const {email} = body;

    try {
        await connect();
        const buyer = new Buyer(body);
        await buyer.save();

        const response = NextResponse.json({
            success: true,
            message: "Buyer created successfully",
            buyer: buyer
        }, {status : 200});

        return response;
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Error in creating buyer",
        }, {status: 500});
    }

}