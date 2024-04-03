import { useState } from 'react';
//components
import {
  AdditionalNav,
  BasicCounterWrap,
  CounterWithAdditionalValueWrap,
  PageNotification,
} from '../../';
//variables
import { ErrorsText, NotificationType } from '../../../variables';
//styles
import style from './counter-switcher.module.scss';
import {
  IAdditionalNavItem,
  IChangeItemAdditionalSettingActionType,
  IItemData,
  IncDecActionType,
  ISelectorGetItemData,
} from '../../../types';
import { useAppSelector } from '../../../hooks/hooks';

interface ICounterSwitcherProps {
  UNID: string;
  incrementAction: IncDecActionType;
  decrementAction: IncDecActionType;
  changeItemSettingAction: IChangeItemAdditionalSettingActionType;
  SelectorGetItemData: ISelectorGetItemData;
}

const CounterSwitcher = ({
  UNID,
  incrementAction,
  decrementAction,
  changeItemSettingAction,
  SelectorGetItemData,
}: ICounterSwitcherProps): JSX.Element => {
  const item: IItemData = useAppSelector(SelectorGetItemData(UNID));

  const countersArray: IAdditionalNavItem[] = Object.entries(item.counters).map(([key, value]) => {
    return {
      value: key,
      title: value.counterTitle,
    };
  });

  const [currentCounter, setCurrentCounter] = useState<string>(countersArray[0].value);

  const getCurrentCounterComponent = (): JSX.Element => {
    const curCounterType = item.counters[currentCounter].counterType;

    switch (curCounterType) {
      case 'ADDITIONAL_VALUE_COUNTER':
        return (
          <CounterWithAdditionalValueWrap
            UNID={item.UNID}
            counter={item.counters[currentCounter]}
            incrementAction={incrementAction}
            decrementAction={decrementAction}
            changeItemSettingAction={changeItemSettingAction}
          />
        );
      case 'BASIC_COUNTER':
        return (
          <BasicCounterWrap
            UNID={item.UNID}
            counter={item.counters[currentCounter]}
            incrementAction={incrementAction}
            decrementAction={decrementAction}
          />
        );
      default:
        return (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.COUNTER_OPENING_ERROR}
            paragraphText={`${ErrorsText.FAILED_OPEN_COUNTER_CALLED_COUNTERNAME} "${currentCounter}".`}
            additionalInfo={`"${currentCounter}" nie odpowiada liscie liczników PIGMENTS_COUNTERS.`}
          />
        );
    }
  };

  const additionalNavHandler = (value: string): void => {
    setCurrentCounter(value);
  };

  return (
    <>
      <section className={style['counter-switcher']}>
        <h2 className="visually-hidden">Licnik</h2>
        <AdditionalNav
          changeHandler={additionalNavHandler}
          items={countersArray}
          defaultItem={currentCounter}
        />

        {getCurrentCounterComponent()}
      </section>
    </>
  );
};

export default CounterSwitcher;