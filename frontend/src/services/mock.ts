import { Invitation } from "@/types/schema";

export const MOCK_INVITATION: Invitation = {
    id: 1,
    user_id: 1,
    slug: "romeo-juliet",
    title: "Romeo & Juliet Wedding",
    is_active: true,
    theme_id: 1,
    theme_config: {
        font_family: "Inter",
        primary_color: "#E11D48", // Rose-600
    },
    features_config: {
        use_ar: true,
        show_angpao: true,
        use_comments: true,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    events: [
        {
            id: 1,
            invitation_id: 1,
            title: "Akad Nikah",
            start_datetime: "2025-08-17T08:00:00",
            end_datetime: "2025-08-17T11:00:00",
            location_name: "Masjid Agung Verona",
            location_address: "Verona, Italy",
            maps_link: "https://maps.google.com",
            timezone: "Europe/Rome",
        },
        {
            id: 2,
            invitation_id: 1,
            title: "Resepsi Mewah",
            start_datetime: "2025-08-17T19:00:00",
            end_datetime: "2025-08-17T22:00:00",
            location_name: "Ballroom Capulet",
            location_address: "Verona, Italy",
            maps_link: "https://maps.google.com",
            timezone: "Europe/Rome",
        }
    ],
    guests: [],
    digital_gifts: [
        {
            id: 1,
            invitation_id: 1,
            bank_name: "BCA",
            account_number: "1234567890",
            account_holder: "Romeo Montague",
        }
    ]
};

export async function getInvitationBySlug(slug: string): Promise<Invitation | null> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (slug === '404') return null;

    return {
        ...MOCK_INVITATION,
        slug: slug
    };
}
