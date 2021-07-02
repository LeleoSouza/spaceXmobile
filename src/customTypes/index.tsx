export interface LaunchType {
  Launch: Launch;
  Rocket: Rocket;
  Links: Links;
}

type Launch = {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: boolean;
  details: string;
};
type Rocket = {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
};

type Links = {
  mission_patch_small: string;
  video_link: string;
};
