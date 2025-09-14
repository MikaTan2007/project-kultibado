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

                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input 
                                className="border-0"
                                id = "product_name" 
                                type="product_name" 
                                placeholder="Product Name"
                                value = {name}
                                onChange={
                                    ((e) => {
                                        setName(e.target.value);
                                        //setWeight([Number(e.target.value)]);
                                    })
                                }
                                required>
                            </Input>
                        </div>

                        <div className="space-y-2">
                            <Input 
                                className="border-0"
                                id = "weight" 
                                type="weight" 
                                placeholder="Product Name"
                                value = {String(weight)}
                                onChange={
                                    ((e) => {
                                        setWeight([Number(e.target.value)]);
                                    })
                                }
                                required>
                            </Input>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddProductForm