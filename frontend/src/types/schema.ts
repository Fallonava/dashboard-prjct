export type InvitationFeatureConfig = {
    use_ar: boolean;
    show_angpao: boolean;
    use_comments: boolean;
    [key: string]: boolean;
};

export type InvitationThemeConfig = {
    primary_color?: string;
    font_family?: string;
    background_url?: string;
    [key: string]: string | undefined;
};

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Invitation {
    id: number;
    user_id: number;
    slug: string;
    title: string;
    theme_id?: number;
    music_url?: string;
    is_active: boolean;
    features_config: InvitationFeatureConfig;
    theme_config: InvitationThemeConfig;
    created_at: string;
    updated_at: string;

    // Relations
    events?: InvitationEvent[];
    guests?: Guest[];
    galleries?: Gallery[];
    digital_gifts?: DigitalGift[];
}

export interface InvitationEvent {
    id: number;
    invitation_id: number;
    title: string;
    start_datetime: string;
    end_datetime: string;
    location_name: string;
    location_address?: string;
    maps_link?: string;
    timezone: string;
}

export interface GuestGroup {
    id: number;
    invitation_id: number;
    name: string;
}

export type InvitationStatus = 'pending' | 'sent' | 'opened';

export interface Guest {
    id: number;
    invitation_id: number;
    group_id?: number | null;
    name: string;
    slug: string;
    whatsapp_number: string;
    uuid: string;
    pax_allotted: number;
    status_invitation: InvitationStatus;

    // Relations
    rsvp?: RSVP;
    group?: GuestGroup;
}

export type RSVPStatus = 'attending' | 'not_attending' | 'tentative';

export interface RSVP {
    id: number;
    guest_id: number;
    status: RSVPStatus;
    pax_confirmed: number;
    created_at: string;
}

export interface Wish {
    id: number;
    invitation_id: number;
    guest_id?: number | null;
    name: string;
    message: string;
    reply_message?: string;
    created_at: string;
}

export interface DigitalGift {
    id: number;
    invitation_id: number;
    bank_name: string;
    account_number: string;
    account_holder: string;
    qr_image?: string;
}

export type GalleryType = 'photo' | 'video' | 'ar_marker' | 'ar_content';

export interface Gallery {
    id: number;
    invitation_id: number;
    type: GalleryType;
    file_url: string;
    caption?: string;
}
