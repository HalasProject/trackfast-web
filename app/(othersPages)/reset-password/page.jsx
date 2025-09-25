import Resetpass1 from "@/components/otherPages/Resetpass1";
export const metadata = {
  title:
    "Reset Password TrackFast — Real-time GPS for Cars & Bikes.",
  description:
    "TrackFast keeps your car and motorcycle secure with real-time GPS tracking and instant alerts.",
};
export default function ResetPasswordPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <Resetpass1 />
        </div>
      </div>
    </>
  );
}
