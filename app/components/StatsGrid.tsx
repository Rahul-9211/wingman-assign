interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  type: 'increase' | 'decrease';
}

function StatCard({ title, value, change, type }: StatCardProps) {
  const getTitleIcon = () => {
    switch (title) {
      case 'CONSULTATIONS':
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z" fill="#667085"/>
          </svg>
        );
      case 'ORDERS PLACED':
        return (
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4052 5.375L5.75 0.719847C5.68061 0.6499 5.59801 0.594444 5.507 0.556703C5.41598 0.518962 5.31838 0.499689 5.21985 0.500004H0.875004C0.775548 0.500004 0.680165 0.539513 0.609839 0.609839C0.539513 0.680165 0.500004 0.775548 0.500004 0.875004V5.21985C0.499689 5.31838 0.518962 5.41598 0.556703 5.507C0.594444 5.59801 0.6499 5.68061 0.719847 5.75L5.375 10.4052C5.44465 10.4748 5.52734 10.5301 5.61834 10.5678C5.70935 10.6055 5.80689 10.6249 5.90539 10.6249C6.0039 10.6249 6.10144 10.6055 6.19245 10.5678C6.28345 10.5301 6.36614 10.4748 6.43579 10.4052L10.4052 6.43579C10.4748 6.36614 10.5301 6.28345 10.5678 6.19245C10.6055 6.10144 10.6249 6.0039 10.6249 5.90539C10.6249 5.80689 10.6055 5.70935 10.5678 5.61834C10.5301 5.52734 10.4748 5.44465 10.4052 5.375ZM2.9375 3.5C2.82625 3.5 2.7175 3.46701 2.625 3.40521C2.53249 3.3434 2.4604 3.25555 2.41782 3.15276C2.37525 3.04998 2.36411 2.93688 2.38581 2.82777C2.40752 2.71865 2.46109 2.61842 2.53976 2.53976C2.61842 2.46109 2.71865 2.40752 2.82777 2.38581C2.93688 2.36411 3.04998 2.37525 3.15276 2.41782C3.25555 2.4604 3.3434 2.53249 3.40521 2.625C3.46701 2.7175 3.5 2.82625 3.5 2.9375C3.5 3.08669 3.44074 3.22976 3.33525 3.33525C3.22976 3.44074 3.08669 3.5 2.9375 3.5Z" fill="#667085"/>
          </svg>
        );
      case 'CONVERSION':
        return (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3L4.5 9L1.5 6" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'TOTAL SALES VALUE':
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.62501 4.19859V3.9375C8.62501 2.76188 6.85173 1.875 4.50001 1.875C2.14829 1.875 0.375008 2.76188 0.375008 3.9375V5.8125C0.375008 6.79172 1.60548 7.56984 3.37501 7.80281V8.0625C3.37501 9.23812 5.14829 10.125 7.50001 10.125C9.85173 10.125 11.625 9.23812 11.625 8.0625V6.1875C11.625 5.21719 10.4334 4.43812 8.62501 4.19859ZM2.62501 6.88453C1.70673 6.62812 1.12501 6.20578 1.12501 5.8125V5.15297C1.50751 5.42391 2.01985 5.64234 2.62501 5.78906V6.88453ZM6.37501 5.78906C6.98016 5.64234 7.49251 5.42391 7.87501 5.15297V5.8125C7.87501 6.20578 7.29329 6.62812 6.37501 6.88453V5.78906ZM5.62501 9.13453C4.70673 8.87812 4.12501 8.45578 4.12501 8.0625V7.86703C4.24829 7.87172 4.37298 7.875 4.50001 7.875C4.68188 7.875 4.85954 7.86891 5.03391 7.85859C5.22763 7.92794 5.42495 7.98678 5.62501 8.03484V9.13453ZM5.62501 7.04297C5.25254 7.09799 4.87652 7.12541 4.50001 7.125C4.1235 7.12541 3.74747 7.09799 3.37501 7.04297V5.92781C3.74803 5.97642 4.12383 6.00053 4.50001 6C4.87618 6.00053 5.25199 5.97642 5.62501 5.92781V7.04297ZM8.62501 9.29297C7.87899 9.40234 7.12102 9.40234 6.37501 9.29297V8.175C6.74791 8.22513 7.12375 8.25018 7.50001 8.25C7.87618 8.25053 8.25199 8.22642 8.62501 8.17781V9.29297ZM10.875 8.0625C10.875 8.45578 10.2933 8.87812 9.37501 9.13453V8.03906C9.98016 7.89234 10.4925 7.67391 10.875 7.40297V8.0625Z" fill="#667085"/>
          </svg>
        );
      case 'AVG ORDER VALUE':
        return (
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.73031 0.9925C8.75859 0.506875 7.46859 0.25 6 0.25C4.53141 0.25 3.24141 0.506875 2.26969 0.9925C1.29797 1.47812 0.75 2.16156 0.75 2.875V5.125C0.75 5.83844 1.30406 6.52422 2.26969 7.0075C3.23531 7.49078 4.53141 7.75 6 7.75C7.46859 7.75 8.75859 7.49313 9.73031 7.0075C10.702 6.52188 11.25 5.83844 11.25 5.125V2.875C11.25 2.16156 10.6959 1.47578 9.73031 0.9925ZM5.625 5.4925V6.9925C4.73438 6.96344 3.98438 6.83219 3.375 6.64141V5.17422C4.10959 5.36993 4.86496 5.4771 5.625 5.49344V5.4925ZM6.375 5.4925C7.13504 5.47616 7.89041 5.369 8.625 5.17328V6.64094C8.01562 6.83172 7.26562 6.96297 6.375 6.99203V5.4925ZM1.5 5.125V4.25922C1.73599 4.45511 1.99436 4.62237 2.26969 4.7575C2.38359 4.81422 2.50406 4.86766 2.625 4.91828V6.34375C1.88297 5.97625 1.5 5.51359 1.5 5.125ZM9.375 6.34375V4.91828C9.49734 4.86766 9.61641 4.81422 9.73031 4.7575C10.0056 4.62237 10.264 4.45511 10.5 4.25922V5.125C10.5 5.51359 10.117 5.97625 9.375 6.34375Z" fill="#667085"/>
          </svg>
        );
      case 'COMMISSION PAID':
        return (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5938 3.12875C10.575 3.08187 10.5553 3.035 10.5352 2.98812C10.2327 2.29064 9.74327 1.69039 9.12094 1.25375H10.125C10.2245 1.25375 10.3198 1.21424 10.3902 1.14391C10.4605 1.07359 10.5 0.978206 10.5 0.87875C10.5 0.779294 10.4605 0.683911 10.3902 0.613585C10.3198 0.543259 10.2245 0.50375 10.125 0.50375H5.25C4.21317 0.505066 3.21475 0.89626 2.45301 1.59965C1.69126 2.30304 1.2219 3.26718 1.13813 4.30062C0.814201 4.38115 0.526387 4.56741 0.320244 4.82993C0.114102 5.09245 0.00140696 5.41622 0 5.75C0 5.84946 0.0395088 5.94484 0.109835 6.01517C0.180161 6.08549 0.275544 6.125 0.375 6.125C0.474456 6.125 0.569839 6.08549 0.640165 6.01517C0.710491 5.94484 0.75 5.84946 0.75 5.75C0.750087 5.61325 0.78756 5.47913 0.858364 5.36214C0.929169 5.24516 1.03061 5.14975 1.15172 5.08625C1.24506 5.92759 1.59588 6.71959 2.15625 7.35406L2.745 9.00219C2.79705 9.14797 2.89293 9.27407 3.01949 9.3632C3.14605 9.45233 3.29708 9.50011 3.45187 9.5H4.04813C4.20284 9.50002 4.35377 9.45219 4.48023 9.36306C4.6067 9.27394 4.70251 9.14789 4.75453 9.00219L4.84453 8.75H7.53047L7.62047 9.00219C7.67249 9.14789 7.7683 9.27394 7.89477 9.36306C8.02123 9.45219 8.17216 9.50002 8.32687 9.5H8.92313C9.07784 9.50002 9.22877 9.45219 9.35523 9.36306C9.4817 9.27394 9.57751 9.14789 9.62953 9.00219L10.3894 6.875H10.5C10.7984 6.875 11.0845 6.75647 11.2955 6.5455C11.5065 6.33452 11.625 6.04837 11.625 5.75V4.25C11.625 3.96783 11.519 3.69595 11.328 3.48827C11.137 3.28058 10.8749 3.15226 10.5938 3.12875ZM7.125 2.375H5.25C5.15054 2.375 5.05516 2.33549 4.98484 2.26516C4.91451 2.19484 4.875 2.09946 4.875 2C4.875 1.90054 4.91451 1.80516 4.98484 1.73483C5.05516 1.66451 5.15054 1.625 5.25 1.625H7.125C7.22446 1.625 7.31984 1.66451 7.39017 1.73483C7.46049 1.80516 7.5 1.90054 7.5 2C7.5 2.09946 7.46049 2.19484 7.39017 2.26516C7.31984 2.33549 7.22446 2.375 7.125 2.375ZM8.4375 5C8.32625 5 8.21749 4.96701 8.12499 4.9052C8.03249 4.84339 7.96039 4.75554 7.91782 4.65276C7.87524 4.54998 7.8641 4.43688 7.88581 4.32776C7.90751 4.21865 7.96109 4.11842 8.03975 4.03975C8.11842 3.96109 8.21865 3.90751 8.32776 3.88581C8.43688 3.8641 8.54998 3.87524 8.65276 3.91782C8.75554 3.96039 8.84339 4.03249 8.9052 4.12499C8.96701 4.21749 9 4.32625 9 4.4375C9 4.58668 8.94074 4.72976 8.83525 4.83525C8.72976 4.94074 8.58668 5 8.4375 5Z" fill="#667085"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl border-[0.5px] drop-shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        {getTitleIcon()}
        <p className="text-xs text-gray-500 uppercase tracking-wider">{title}</p>
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {type === 'decrease' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 18.75V12.75C22.5 12.5511 22.421 12.3603 22.2803 12.2197C22.1397 12.079 21.9489 12 21.75 12C21.5511 12 21.3603 12.079 21.2197 12.2197C21.079 12.3603 21 12.5511 21 12.75V16.9397L13.2806 9.21937C13.211 9.14964 13.1283 9.09432 13.0372 9.05658C12.9462 9.01884 12.8486 8.99941 12.75 8.99941C12.6514 8.99941 12.5538 9.01884 12.4628 9.05658C12.3717 9.09432 12.289 9.14964 12.2194 9.21937L9 12.4397L2.78062 6.21937C2.63989 6.07864 2.44902 5.99958 2.25 5.99958C2.05097 5.99958 1.8601 6.07864 1.71937 6.21937C1.57864 6.36011 1.49958 6.55098 1.49958 6.75C1.49958 6.94902 1.57864 7.13989 1.71937 7.28062L8.46937 14.0306C8.53903 14.1004 8.62174 14.1557 8.71279 14.1934C8.80384 14.2312 8.90144 14.2506 9 14.2506C9.09856 14.2506 9.19615 14.2312 9.2872 14.1934C9.37825 14.1557 9.46097 14.1004 9.53062 14.0306L12.75 10.8103L19.9397 18H15.75C15.5511 18 15.3603 18.079 15.2197 18.2197C15.079 18.3603 15 18.5511 15 18.75C15 18.9489 15.079 19.1397 15.2197 19.2803C15.3603 19.421 15.5511 19.5 15.75 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75Z" 
              fill="#EF4444"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z" 
              fill="#22C55E"/>
          </svg>
        )}
        <p className={`text-sm ${type === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
          {change}% <span className="text-gray-500">{type}</span>
        </p>
      </div>
    </div>
  );
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="CONSULTATIONS" value="24" change={15} type="increase" />
      <StatCard title="ORDERS PLACED" value="12" change={15} type="decrease" />
      <StatCard title="CONVERSION" value="50%" change={15} type="decrease" />
      <StatCard title="TOTAL SALES VALUE" value="$2,400" change={15} type="increase" />
      <StatCard title="AVG ORDER VALUE" value="$240" change={15} type="increase" />
      <StatCard title="COMMISSION PAID" value="$240" change={15} type="increase" />
    </div>
  );
} 