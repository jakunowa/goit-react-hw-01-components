import PropTypes from 'prop-types';
import css from './statistics.module.css';
export const Statistics=({ stats})=>{
    return(
        <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.list}>
  {stats.map(stat => (
        <li
          
          key={stat.id}
          className={css.item}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}

  </ul>
</section>
    )
}


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}