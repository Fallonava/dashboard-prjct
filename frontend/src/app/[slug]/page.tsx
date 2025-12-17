import { getInvitationBySlug } from "@/services/mock";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const invitation = await getInvitationBySlug(params.slug);

    if (!invitation) return { title: 'Not Found' };

    return {
        title: `${invitation.title} | Undangan Digital`,
        description: `Hadiri pernikahan kami. Buka undangan digital ${invitation.title}.`,
        openGraph: {
            images: ['/og-placeholder.jpg'], // TODO: Dynamic OG Image
        }
    };
}

export default async function InvitationPage({ params }: Props) {
    const invitation = await getInvitationBySlug(params.slug);

    if (!invitation) {
        notFound();
    }

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden">
            {/* Placeholder for Theme Wrapper Component which will inject fonts/colors */}
            <div className="container mx-auto max-w-md bg-white min-h-screen shadow-2xl relative">
                <header className="p-6 text-center pt-20">
                    <h1 className="text-3xl font-bold mb-2">{invitation.title}</h1>
                    <p className="text-muted-foreground">Sabtu, 17 Agustus 2025</p>
                </header>

                <section className="p-6 space-y-6">
                    {invitation.events?.map((event) => (
                        <div key={event.id} className="p-4 rounded-xl border border-border bg-card shadow-sm">
                            <h3 className="font-semibold text-lg">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.location_name}</p>
                            <div className="mt-4 flex gap-2">
                                <a
                                    href={event.maps_link}
                                    target="_blank"
                                    className="text-xs px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/80"
                                >
                                    Google Maps
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Features Check */}
                {invitation.features_config.show_angpao && (
                    <section className="p-6 bg-secondary/20">
                        <h2 className="text-center font-bold mb-4">Digital Gift</h2>
                        <div className="space-y-3">
                            {invitation.digital_gifts?.map((gift) => (
                                <div key={gift.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                                    <div>
                                        <p className="font-bold">{gift.bank_name}</p>
                                        <p className="font-mono text-sm">{gift.account_number}</p>
                                    </div>
                                    <button className="text-xs text-primary font-medium">Copy</button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
