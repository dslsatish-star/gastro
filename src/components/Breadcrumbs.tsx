import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-[#F9F6F0] border-b border-[#EADFCB]/60">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap text-xs sm:text-sm text-[#665E5E] gap-1.5">
        <a
          href="/"
          onClick={(e) => {
            if (items[0]?.onClick) {
              e.preventDefault();
              items[0].onClick();
            }
          }}
          className="flex items-center gap-1 hover:text-[#58111A] transition-colors text-[#58111A] font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </a>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
              {isLast ? (
                <span className="font-semibold text-[#221F1F] truncate max-w-[240px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || '#'}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="hover:text-[#58111A] transition-colors font-medium text-[#58111A]"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
