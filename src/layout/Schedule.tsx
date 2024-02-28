import React, { useState } from "react";
import Dropdown from "@/components/buttons/dropdown/Dropdown";
import { season, view, weeks } from "./core/constants";
import TourCard from "@/components/cards/TourCard";

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
        // Handle selecting a week for January
        // You can set state or perform any action here
    };

    const handleWeekSelectFebruary = (value: string) => {
        // Handle selecting a week for February
        // You can set state or perform any action here
    };

    const handleWeekDropdownToggleJanuary = () => {
        setWeekDropdownOpenJanuary(!weekDropdownOpenJanuary);
    };

    const handleWeekDropdownToggleFebruary = () => {
        setWeekDropdownOpenFebruary(!weekDropdownOpenFebruary);
    };

    return (
        <>
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

                <TourCard imageUrl={"/tournaments/course1.jpeg"} startDate="2024-01-04" endDate="2024-01-07" tournament={"PGA Tour: The Sentry Tournament of Champions 2024"} description={"Plantation Course at Kapalua"} location="Kapalua, Maui, Hawaii, United States of America" winner="Chris Klark"/>   
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
                <TourCard imageUrl={"/tournaments/course2.jpeg"} startDate="2024-02-28" endDate="2024-02-28" tournament={"Sony Open in Hawaii"} description={"Waialae Country Club"} location="Honolulu, Hawaii, United States of America" winner="Grayson Murray"/>   
            </div>
        </>
    );
};

export default Schedule;
