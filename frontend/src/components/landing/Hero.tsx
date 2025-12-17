"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center space-y-8"
                >
                    {/* Badge */}
                    <motion.div variants={fadeIn}>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-foreground/80">
                            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                            <span>The Next Generation of Checks</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeIn}
                        className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50"
                    >
                        Undangan Digital <br />
                        <span className="text-primary italic">Level Enterprise</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeIn}
                        className="max-w-[600px] text-muted-foreground text-lg md:text-xl"
                    >
                        Bukan sekadar website undangan. Ini adalah platform manajemen tamu undangan dengan skalabilitas tinggi, QR Code check-in, dan analisis realtime.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
                            Buat Undangan
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-all text-foreground font-medium">
                            Lihat Demo
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
