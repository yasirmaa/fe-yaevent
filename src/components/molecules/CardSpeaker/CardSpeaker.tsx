import avatarDetail from '@/assets/images/avatar.png';
import iconMarker from '@/assets/icons/ic-marker.svg';
import iconTime from '@/assets/icons/ic-time.svg';
import iconCalendar from '@/assets/icons/ic-calendar.svg';

export const CardSpeaker = () => {
  return (
    <div className="p-6 bg-white border border-gray-secondary flex flex-col rounded-3xl">
      <p className="font-medium text-lg mb-4">Your Speaker</p>
      <div className="flex">
        <img src={avatarDetail} alt="Speaker Avatar" className="rounded-full w-16 h-16" />
        <div className="ml-4 flex flex-col justify-center">
          <p className="font-medium">John Doe</p>
          <span className="text-sm text-gray-primary">Lead Designer</span>
        </div>
      </div>
      <hr className="my-[30px] border-t border-gray-primary" />
      <h6 className="font-medium text-lg mb-4">Get Ticket</h6>
      <div className="font-bold text-[42px] mb-4">
        $2,980<span className="text-gray-primary text-base font-normal">/person</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img src={iconMarker} alt="semina" /> <span>Gowork, Bandung</span>
        </div>
        <div className="flex gap-4 items-center">
          <img src={iconTime} alt="time" /> <span>10:00 - 12:00</span>
        </div>
        <div className="flex gap-4 items-center">
          <img src={iconCalendar} alt="calendar" /> <span>March 10, 2023</span>
        </div>
      </div>
    </div>
  );
};
