export interface LaunchType {
  flight_number?: number;
  mission_name?: string;
  launch_year?: string;
  launch_date_local?: string;
  launch_success?: boolean;
  details?: string;
  rocket?: Rocket;
  links?: Links;
}
interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

interface Links {
  mission_patch_small: string;
  video_link: string;
}
