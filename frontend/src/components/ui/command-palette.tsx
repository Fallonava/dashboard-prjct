"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, User, CreditCard, Settings, Calendar, Smile } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: -20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-[500px]"
                    >
                        <Command className="w-full overflow-hidden rounded-xl border border-white/20 bg-[#0f172a]/90 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center border-b border-white/10 px-3">
                                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                                    No results found.
                                </Command.Empty>
                                <Command.Group heading="Suggestions" className="text-gray-400 text-xs font-medium mb-2 px-2">
                                    <CommandItem icon={Calendar} text="Calendar" shortcut="C" />
                                    <CommandItem icon={Smile} text="Search Emoji" shortcut="⌘E" />
                                    <CommandItem icon={CreditCard} text="Calculator" />
                                </Command.Group>
                                <Command.Group heading="Settings" className="text-gray-400 text-xs font-medium mb-2 px-2 mt-2">
                                    <CommandItem icon={User} text="Profile" shortcut="⌘P" />
                                    <CommandItem icon={CreditCard} text="Billing" shortcut="⌘B" />
                                    <CommandItem icon={Settings} text="Settings" shortcut="⌘S" />
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CommandItem({ icon: Icon, text, shortcut }: { icon: any, text: string, shortcut?: string }) {
    return (
        <Command.Item className="relative flex cursor-default select-none items-center rounded-lg px-2 py-2 text-sm text-gray-300 outline-none hover:bg-white/10 hover:text-white data-[selected='true']:bg-white/10 data-[selected='true']:text-white transition-colors">
            <Icon className="mr-2 h-4 w-4" />
            <span>{text}</span>
            {shortcut && (
                <span className="ml-auto text-xs tracking-widest text-gray-500">
                    {shortcut}
                </span>
            )}
        </Command.Item>
    )
}
