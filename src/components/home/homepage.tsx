"use client"

// import DesktopNav from '@/components/home/navbar/desktop-nav';
// import TooltipChat from '@/components/home/tooltip-chat';
// import { ToggleDisplay } from '@/components/toggle/toggle-display';
// import { Input } from '@/components/ui/input';
// import { Menubar } from '@/components/ui/menubar';
// import {
//   ResizablePanel,
//   ResizablePanelGroup,
// } from '@/components/ui/resizable';
// import { Separator } from '@/components/ui/separator';

export function Homepage() {
    return (
    <div className="flex flex-col min-h-screen">
      {/* <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
              < DesktopNav />
          </div>
        </ResizablePanel>
      
        <ResizablePanel className='border-none'  defaultSize={30}>
          <div className="flex h-full items-center border-none p-6">
              <Menubar className='border-none'>
            <ToggleDisplay    />
            <Separator        className="my-4" orientation="vertical" />
            < TooltipChat />
          <Input
            placeholder="Escribe lo que precices..."
            
            className="max-w-sm border-dotted"
          />
      
            </Menubar>
  
          </div>
        </ResizablePanel>
      </ResizablePanelGroup> */}

      {/* Body section */}
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Homepage!</h2>
        <p className="text-gray-700">
          Here you can find various tools and features. Feel free to interact with the components and explore the site.
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            This is where you can add additional content, links, or features in the body section.
          </p>
        </div>
      </div>
    </div>
    
    )
}
