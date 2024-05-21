import clsx from "clsx";
import { Button, Chip, Listbox, ListboxItem } from "@nextui-org/react";
import {
  ChevronRight,
  Heart,
  LogOut,
  Bug,
  Bell,
  History,
  Home,
  Share,
  Share2,
  DollarSign,
  LineChart,
} from "lucide-react";
import { BrandName } from "./top-navigation";

export default function SidebarNavigation({ className }: { className?: any }) {
  return (
    <aside
      className={clsx(
        "@container",
        className,
        "sidebar-sticky sidebar justify-start overflow-x-hidden rounded-xl"
      )}
    >
      <div className="h-full overflow-y-auto flex flex-col">
        <header className="sticky top-0 bg-zinc-900 z-20 border-b p-2 flex items-center">
          <svg
            fill="none"
            height="42"
            viewBox="0 0 32 32"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="100%" rx="16" width="100%"></rect>
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <BrandName className="@max-w-20:hidden" />
        </header>
        <div className="grow grid gap-y-4 h-full py-5">
          <Listbox
            aria-label="Applicaitno Menu"
            // onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y overflow-visible rounded-md px-2"
            itemClasses={{
              base: "px-1 py-2 riounded-md shadow-md text-lg gap-3 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="issues"
              endContent={<ItemCounter number={13} />}
              classNames={{
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-success/10 text-success p-1">
                <IconWrapper className="bg-default/50 text-foreground">
                  <Home />
                </IconWrapper>
              }
            >
              Dashboard
            </ListboxItem>
            <ListboxItem
              key="actions" 
              href="/market"
              endContent={<ItemCounter number={2} />}
              classNames={{
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-warning/10 text-warning">
                <IconWrapper className="bg-default/50 text-foreground">
                  <LineChart className="text-lg " />
                </IconWrapper>
              }
            >
              Market{" "}
              <Chip variant="flat" color="danger" className="ms-2" size="sm" radius="sm">
                Hot
              </Chip>
            </ListboxItem>
            <ListboxItem
              key="pull_requests"
              endContent={<ItemCounter number={6} />}
              classNames={{
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-primary/10 text-primary">
                <IconWrapper className="bg-default/50 text-foreground">
                  <Bell className="text-lg " />
                </IconWrapper>
              }
            >
              Notifications
            </ListboxItem>
            <ListboxItem
              key="discussions"
              endContent={<ItemCounter number={293} />}
              classNames={{
                title: "text-base",
              }}
              startContent={
                <IconWrapper className="bg-default/50 text-foreground">
                  <History className="text-lg " />
                </IconWrapper>
              }
            >
              Transactions
            </ListboxItem>
            {/* <ListboxItem
              key="license"
              endContent={
                <span className="text-small text-default-400">MIT</span>
              }
              startContent={
                <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                  <Bell />
                </IconWrapper>
              }
            >
              License
            </ListboxItem> */}
          </Listbox>
          <Listbox
            aria-label="application Menu"
            onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y overflow-visible rounded-md px-2 mt-auto"
            itemClasses={{
              base: "px-1 riounded-md shadow-md text-lg gap-3 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="actions"
              endContent={
                <ChevronRight className="text-default-400 me-2 text-xl" />
              }
              classNames={{
                title: "text-base",
              }}
              description="Earn Rewards and Insentives"
              startContent={
                <IconWrapper className="bg-success/10 text-success">
                  <Share2 />
                </IconWrapper>
              }
            >
              Share with friends
            </ListboxItem>
            <ListboxItem
              key="license"
              endContent={
                <span className="text-small text-default-400">MIT</span>
              }
              classNames={{
                title: "text-base",
              }}
              description="Keep us alive. Empower our future"
              startContent={
                // <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                <IconWrapper className="bg-primary/10 text-primary">
                  <DollarSign />
                </IconWrapper>
              }
            >
              Sponsor Us
            </ListboxItem>
          </Listbox>
          {/* <article className="p-4">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="card-header text-center">Invite a Friend(s)</h2>
                <p className="text-gray-200 text-sm">
                  Stand a chance to win Rewards and Prizes
                </p>
                <div className="card-footer">
                  <button className="btn-secondary btn w-full rounded-md">Share invitation link <Share /></button> 
                </div>
              </div>
          </div>
          </article> */}
        </div>
        <footer className="sticky mt-auto bottom-0 flex flex-wrap items-center gap-2 p-2  bg-zinc-900 z-20">
          <Button
            href="#"
            className="gap-2 p-2 h-auto grow justify-start rounded-lg border bg-zinc-900"
            startContent={
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-lg object-cover shadow-sm"
              />
            }
            endContent={<ChevronRight size="18" />}
          >
            <p className="grow text-start">
              <strong className="text-sm block font-medium">
                Eric Frusciante
              </strong>
              <small className="text-sm text-primary-400">
                eric@frusciante.com{" "}
              </small>
            </p>
          </Button>
          <Button
            isIconOnly
            aria-label="logout"
            className="rounded-md bg-zinc-900 border h-auto self-stretch my-1"
            variant="faded"
            color="danger"
          >
            <LogOut size="18" />
          </Button>
        </footer>
      </div>
    </aside>
  );
}

import { cn } from "@nextui-org/react";

export const IconWrapper = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-lg justify-center w-10 h-10 shrink-0"
    )}
  >
    {children}
  </div>
);

export const ItemCounter = ({ number }: { number?: number }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRight className="text-xl" />
  </div>
);