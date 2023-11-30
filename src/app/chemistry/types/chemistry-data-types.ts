//vars
import { ChemistryLogsNames, ChemistrySettingsNames } from '../variables/chemistry-data-variables';

interface IChemistryDataPackageType {
  dataPackageName: string;
  dataPackageUNID: number;
  items: IChemistryDataItemType[];
}

interface IChemistryLogs {
  [ChemistryLogsNames.COUNTER]: {
    log: string[];
    name: string;
  };
}

interface IChemistrySettings {
  [ChemistrySettingsNames.BASE_COUNTER_VALUE]: {
    settingValue: number;
    name: string;
  };
}

interface IChemistryDataItemType {
  UNID: string;
  amount: number;
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: IChemistryLogs;
  lastChange: string | null;
  settings: IChemistrySettings;
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

type ChemistryDataType = IChemistryDataPackageType[];

export type { IChemistryDataItemType, ChemistryDataType, IChemistryDataPackageType };
