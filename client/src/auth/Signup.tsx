import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { userSignupSchema, type SignupInputState } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneCallIcon, User } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [errors, setErrors] = useState<
        Partial<Record<keyof SignupInputState, string[]>>>
        ({});

    const [input, setInput] = useState<SignupInputState>({
        fullName: "",
        email: "",
        password: "",
        contact: "",
    });

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const signupSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        // Form validation check start
        const result = userSignupSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        // Signup api implementation start here
    };

    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={signupSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">FoodEats</h1>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            name="fullName"
                            autoFocus
                            placeholder="Full Name"
                            value={input.fullName}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <User size={"18"} className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors.fullName && <span className="text-xs text-red-500">{errors.fullName[0]}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail size={"18"} className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
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
                        <LockKeyhole size={"18"} className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors.password && <span className="text-xs text-red-500">{errors.password[0]}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            name="contact"
                            placeholder="Contact"
                            value={input.contact}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <PhoneCallIcon size={"18"} className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        {errors.contact && <span className="text-xs text-red-500">{errors.contact[0]}</span>}
                    </div>
                </div>

                <div className="mb-10">
                    {loading ? <Button disabled={loading} className="w-full btn-primary cursor-pointer btn-primary-hover">
                        <Loader2 className="mr-0 h-4 w-4 animate-spin" />Please wait...
                    </Button> : (<Button type="submit" className="w-full btn-primary cursor-pointer btn-primary-hover">Signup</Button>)}

                </div>

                <Separator />

                <p className="mt-2">
                    Already have an account? {" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </p>

            </form>
        </div>
    )
}

export default Signup