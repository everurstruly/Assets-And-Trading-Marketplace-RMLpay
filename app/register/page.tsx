"use client";

import { Button, DatePicker, Input, Link } from "@nextui-org/react";
import TransactionPINInput from "../(pwa)/account/transaction-pin-input";
import AuthFlowNavigationTop from "../(pwa)/auth-flow-navigation-top";
import { MailPlus } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function RegisterPage() {
  const [eligible, setEligible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AuthFlowNavigationTop
        renderCTA={() => (
          <Button as={Link} color="default" size="sm" radius="sm" href="/login">
            Login
          </Button>
        )}
      />

      <main>
        <section className="pt-12 py-8 px-4 max-w-lg mx-auto">
          <header>
            <MailPlus className="block mx-auto size-10 mb-2 sm:size-12 sm:mb-4" />
            <h1 className="text-2xl sm:text-3xl text-center mb-1 sm:mb-2 font-medium">
              Create an account ✨
            </h1>
            <p className="text-sm text-zinc-400 text-center">
              Start your exciting journey with us today.
            </p>
          </header>

          <form className={clsx("pt-10", { hidden: eligible })}>
            <section className="grid gap-y-6 mb-10">
              <Input
                isRequired
                size="md"
                type="email"
                radius="sm"
                label="Email"
              />
              <Input radius="sm" type="password" label="Password" />
              <Input radius="sm" type="password" label="Re-type Password" />
            </section>

            <Button
              color="primary"
              variant="solid"
              fullWidth
              radius="sm"
              size="lg"
              onClick={() => setEligible(true)}
            >
              Complete your Profile
            </Button>
          </form>

          <form className={clsx("pt-10", { hidden: !eligible })}>
            <section className="grid gap-y-6 mb-10">
              <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
                <Input size="md" radius="sm" label="First Name" />
                <Input size="md" radius="sm" label="Last Name" />
              </div>
              <DatePicker
                isRequired
                radius="sm"
                label="Date of Birth"
                showMonthAndYearPickers
              />
              {/* <Input size="md" radius="sm" label="Transaction PIN" /> */}
              <div className="bg-zinc-800 rounded-lg p-2.5">
                <label
                  htmlFor="transaction-pin"
                  className="text-sm text-zinc-300 block mb-1.5"
                >
                  Transaction PIN
                </label>
                <TransactionPINInput />
              </div>
            </section>

            <Button
              as={Link}
              href="/dashboard"
              color="primary"
              variant="solid"
              fullWidth
              radius="sm"
              size="lg"
            >
              Done! Go-to Dashboard
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
