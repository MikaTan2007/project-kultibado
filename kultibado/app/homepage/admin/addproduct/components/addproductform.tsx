//React
import { useState, useEffect } from "react";

//Design
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

//Routing
import { useNavigation } from "@/hooks/useNavigation";

const AddProductForm: React.FC = () => {
    //Routing
    const {navigate} = useNavigation();

    //Variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [weight, setWeight] = useState<number[]>([]);
    
    return (
        <div>
            <Card className = "mx-auto max-w-sm border-0">
                <CardHeader className = "space-y-1">
                    <CardTitle className = "text-2xl font-bold flex justify-center">
                        Create Product
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default AddProductForm