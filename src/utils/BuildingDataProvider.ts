import { useState, useEffect } from 'react';
import floors from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingDataState, setBuildingDataState] = useState<Floor[]>(floors);

  const getFloorByIndex = (floorIndex: number): Floor => {
    return buildingDataState[floorIndex];
  };

  const getListOfActivities = (): string[] => {
    return buildingDataState.map(floor => floor.activity);
  };

  return {
    buildingData: buildingDataState,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
