import { useLocation } from 'preact-iso';
import Button from '../../components/Button/Button';
import styles from './NotFound.module.scss';

export function NotFound() {
  const location = useLocation();

  return (
    <section className={styles['not-found']}>
      <h1>404: Not Found</h1>
      <p>It's gone :(</p>
      <Button onClick={() => location.route('/')}>Back to Home</Button>
    </section>
  );
}
