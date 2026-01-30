import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { userLoginSchema, type LoginInputState } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState<Partial<Record<keyof LoginInputState, string[]>>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        // Form validation check start
        const result = userLoginSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        // Login Api implementation
        console.log(input);
    }

    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">FoodEats</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            name="email"
                            autoFocus
                            placeholder="Email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors.email && <span className="text-xs text-red-500">{errors.email[0]}</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors.password && <span className="text-xs text-red-500">{errors.password[0]}</span>}
                    </div>
                </div>

                <div className="mb-10">
                    {loading ? <Button disabled={loading} className="w-full btn-primary cursor-pointer btn-primary-hover">
                        <Loader2 className="mr-0 h-4 w-4 animate-spin" />Please wait...
                    </Button> : (<Button type="submit" className="w-full btn-primary cursor-pointer btn-primary-hover">Login</Button>)}

                    <div className="mt-4">
                        <Link
                            to="/forgot-password"
                            className="hover:text-blue-500 text-gray-700 hover:underline"
                        >
                            Forgot Password
                        </Link>
                    </div>
                </div>

                <Separator />

                <p className="mt-2">
                    Don't have an account? {" "}
                    <Link to="/signup" className="text-blue-500">SignUp</Link>
                </p>

            </form>
        </div>
    )
}

export default Login