import React, { useState } from "react";
import Dropdown from "@/components/buttons/dropdown/Dropdown";
import { season, view, weeks } from "./core/constants";
import TourCard from "@/components/cards/TourCard";
import Carousel from "@/components/carousel/Carousel";


const Schedule = () => {
    const [selectedSeason, setSelectedSeason] = useState<string>('');
    const [selectedView, setSelectedView] = useState<string>('');
    const [seasonDropdownOpen, setSeasonDropdownOpen] = useState<boolean>(false);
    const [viewDropdownOpen, setViewDropdownOpen] = useState<boolean>(false);
    const [weekDropdownOpenJanuary, setWeekDropdownOpenJanuary] = useState<boolean>(false);
    const [weekDropdownOpenFebruary, setWeekDropdownOpenFebruary] = useState<boolean>(false);

    const handleSeasonSelect = (value: string) => {
        setSelectedSeason(value);
        setSeasonDropdownOpen(false); // Close the season dropdown after selection
    };

    const handleViewSelect = (value: string) => {
        setSelectedView(value);
        setViewDropdownOpen(false); // Close the view dropdown after selection
    };

    const handleSeasonDropdownToggle = () => {
        setSeasonDropdownOpen(!seasonDropdownOpen);
        setViewDropdownOpen(false); // Close the view dropdown when opening the season dropdown
    };

    const handleViewDropdownToggle = () => {
        setViewDropdownOpen(!viewDropdownOpen);
        setSeasonDropdownOpen(false); // Close the season dropdown when opening the view dropdown
    };

    const handleWeekSelectJanuary = (value: string) => {
        
    };

    const handleWeekSelectFebruary = (value: string) => {
        
    };

    const handleWeekDropdownToggleJanuary = () => {
        setWeekDropdownOpenJanuary(!weekDropdownOpenJanuary);
    };

    const handleWeekDropdownToggleFebruary = () => {
        setWeekDropdownOpenFebruary(!weekDropdownOpenFebruary);
    };

    return (
        <>
        <Carousel/>
            <div className="flex">
                <Dropdown
                    options={season}
                    onSelect={handleSeasonSelect}
                    isOpen={seasonDropdownOpen}
                    onToggle={handleSeasonDropdownToggle}/>
                <Dropdown
                    options={view}
                    onSelect={handleViewSelect}
                    isOpen={viewDropdownOpen}
                    onToggle={handleViewDropdownToggle}
                    placeholder="View" />
            </div>

            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
            
            <span className="font-bold text-2xl">Season {selectedSeason}</span>
            
            <div className="my-5">
                <div className="text-xl font-semibold flex justify-between items-center">
                    <span className="font-bold text-2xl">January</span>
                    <Dropdown
                        options={weeks}
                        onSelect={handleWeekSelectJanuary}
                        isOpen={weekDropdownOpenJanuary}
                        onToggle={handleWeekDropdownToggleJanuary}
                        placeholder="Weeks" />
                </div>

                <TourCard imageUrl={"/tournaments/course1.jpeg"} startDate="2024-01-04" endDate="2024-01-07" tournament={"PGA Tour: The Sentry Tournament of Champions 2024"} description={"Plantation Course at Kapalua"} location="Kapalua, Maui, Hawaii, United States of America" winner="Chris Klark" prizeMoney="60,000,000" logoUrl="/tournaments/logo/logo1.jpeg"/>
                <TourCard imageUrl={"/tournaments/course2.jpeg"} startDate="2024-01-11" endDate="2024-01-14" tournament={"PGA Tour: Sony Open in Hawaii 2024"} description={"Waialae Country Club"} location="Honolulu, Hawaii, United States of America" winner="Si Woo Kim" prizeMoney="56,000,000" logoUrl="/tournaments/logo/logo2.jpeg"/>      
            </div>
            
            <div className="my-5">
                <div className="text-xl font-semibold flex justify-between">
                    <span className="font-bold text-2xl">February</span>
                    <Dropdown
                        options={weeks}
                        onSelect={handleWeekSelectFebruary}
                        isOpen={weekDropdownOpenFebruary}
                        onToggle={handleWeekDropdownToggleFebruary}
                        placeholder="Weeks" />
                </div>
                <TourCard imageUrl={"/tournaments/course3.png"} startDate="2024-02-01" endDate="2024-02-04" tournament={"PGA Tour: AT&T Pebble Beach Pro-Am"} description={"Pebble Beach Golf Links"} location="Pebble Beach, California, United States of America" winner="Justin Rose" prizeMoney="20,000,000" logoUrl="/tournaments/logo/logo5.jpeg"/>   
            </div>
        </>
    );
};

export default Schedule;
