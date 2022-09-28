import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const routeChange = (path) => { navigate(`${path}`); };

export default routeChange;
