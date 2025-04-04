import Paragraph from '@/common/Paragraph';
import style from './index.module.scss';
import CtaButton from '@/common/Button/CtaButton';

const PointofSaleCard = () => {
  return (
    <div
      className={`card p-3 h-100 position-relative  ${style.OtherSolutionCard}`}
    >
      <img src="/images/solution/1.png" className="card-img-top" alt="..." />
      <div className="card-body ps-0">
        <h6 className="text-primary-100">Solutions</h6>
        <h5 className="card-title heading-4">Point Of Sale Solutions</h5>
        <Paragraph className="card-text">
          From mobile card readers to full-featured POS terminals, we ensure you
          get the right solution to accept payments quickly, securely, and
          effortlessly.
        </Paragraph>
        <CtaButton className="btn btn-feature  ">
          Find Out More
        </CtaButton>
      </div>
    </div>
  );
};

export default PointofSaleCard;
