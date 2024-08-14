import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/auth";

interface UserNavProps {
  name: string;
  avatar: {
    initails: string;
    image?: string;
  };
}

export function UserNav({ name, avatar }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {avatar?.image && <AvatarImage src={avatar.image} alt="@shadcn" />}
            <AvatarFallback>{avatar.initails}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-xs leading-none text-muted-foreground">
              Hi there
            </p>
            <p className="text-sm font-medium leading-none">{name}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form
          action={async () => {
            "use server";
            await signOut({ redirect: true, redirectTo: "/" });
          }}
        >
          <Button className="h-auto w-full bg-transparent p-0 text-black text-left hover:bg-transparent">
            <DropdownMenuItem className="w-full">Log out</DropdownMenuItem>
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
