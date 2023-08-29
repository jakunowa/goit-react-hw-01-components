import PropTypes from 'prop-types';
import css from './statistics.module.css';
export const Statistics=(title, stats)=>{
    return(
        <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.label}>.docx</span>
      <span className={css.percentage}>4%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp3</span>
      <span className={css.percentage}>14%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.pdf</span>
      <span className={css.percentage}>41%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp4</span>
      <span className={css.percentage}>12%</span>
    </li>
  </ul>
</section>
    )
}


Statistics.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };