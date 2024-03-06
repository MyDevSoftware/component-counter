//components
import ItemCardShortSkeleton from './item-card-short-skeleton/item-card-short-skeleton';
//variables
import { UnitsOfMeasurementText } from '../../../variables/';
//types
import type { IItemDataToDisplay } from '../../../types/';
//styles
import style from './item-card-short.module.scss';

interface IItemCardShortProps {
  item: IItemDataToDisplay | undefined;
  measurementText: UnitsOfMeasurementText;
  onCardClickHandler?: () => void;
  withModal?: boolean;
}

const ItemCardShort = ({
  item,
  measurementText,
  onCardClickHandler,
  withModal,
}: IItemCardShortProps): JSX.Element => {
  return (
    <>
      {item ? (
        <article
          onClick={onCardClickHandler}
          className={`${style['item-card-short']} ${withModal && style['item-card-short--with-modal']}`}
        >
          <div className={style['item-card-short__wrap']}>
            <h3 className={`content-primary-a heading-small`}>{item.productName}</h3>

            {item.description && (
              <p className={`content-primary-a paragraph-small`}>{item.description}</p>
            )}

            {item.systemCode && (
              <p className={`content-primary-a paragraph-small`}>
                <span className={`paragraph-secondary-a`}>Numer:</span> {item.systemCode}
              </p>
            )}
          </div>
          <img
            className={style['item-card-short__image']}
            src={item.image}
            alt={item.description}
            width={150}
            height={150}
          />
          <div className={`${style['item-card-short__amount']} paragraph-primary-a label-medium`}>
            {measurementText}
            <span className="paragraph-primary-a heading-medium">{item.amount}</span>
          </div>
        </article>
      ) : (
        <ItemCardShortSkeleton />
      )}
    </>
  );
};
export default ItemCardShort;