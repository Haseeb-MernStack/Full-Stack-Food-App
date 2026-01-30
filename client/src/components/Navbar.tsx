import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {

    const admin = true;
    const loading = false;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/" className="font-bold md:font-extrabold text-2xl">FoodEats</Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/order/status">Order</Link>
                        {
                            admin && (
                                <Menubar>
                                    <MenubarMenu>
                                        <MenubarTrigger>
                                            Dashboard
                                        </MenubarTrigger>
                                        <MenubarContent>
                                            <Link to="/admin/restaurant">
                                                <MenubarItem>Restaurant</MenubarItem>
                                            </Link>
                                            <Link to="/admin/menu">
                                                <MenubarItem>Menu</MenubarItem>
                                            </Link>
                                            <Link to="/admin/orders">
                                                <MenubarItem>Order</MenubarItem>
                                            </Link>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            )
                        }
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Dark
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Link to="/cart" className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button size={'icon'} className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500">5</Button>
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            {loading ? (
                                <Button className="btn-primary btn-primary-hover">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait...
                                </Button>
                            ) : (
                                <Button className="btn-primary btn-primary-hover">Logout</Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    {/* Mobile Responsive Design */}
                    <MobileNavbar />
                </div>
            </div>
        </div>
    );
};

export default Navbar

const MobileNavbar = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size={"icon"}
                    className="rounded-full bg-gray-200 text-black"
                    variant="outline">
                    <Menu size={"18"} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col z-10">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>FoodEats</SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>

                <Separator className="my-2" />

                <SheetDescription className="flex-1">
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <User />
                        <span>Profile</span>
                    </Link>
                    <Link to="/order" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <HandPlatter />
                        <span>Order</span>
                    </Link>
                    <Link to="/cart" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <ShoppingCart />
                        <span>Cart (0)</span>
                    </Link>
                    <Link to="/menu" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <SquareMenu />
                        <span>Menu</span>
                    </Link>
                    <Link to="/restaurent" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <UtensilsCrossed />
                        <span>Restautrent</span>
                    </Link>
                    <Link to="/restaurent-orders" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <PackageCheck />
                        <span>Restaurent Orders</span>
                    </Link>
                </SheetDescription>

                <SheetFooter className="flex flex-col gap-4">
                            <div className="flex flex-row items-center gap-2">
                                <Avatar>
                                    <AvatarImage />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className="font-bold">
                                    Haseeb MernStack
                                </h1>
                            </div>

                        <SheetClose asChild>
                        <Button type="submit" className="btn-primary btn-primary-hover">
                            Logout
                        </Button>
                    </SheetClose>
                    
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}