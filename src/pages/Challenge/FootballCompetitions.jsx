import { useState, useEffect } from 'react';

const YearSelector = ({ onChange, year, loading }) => {
  return (
    <select value={year} onChange={onChange} disabled={loading}>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
    </select>
  );
};

const CompetitionList = ({ data }) => {
  return (
    <ul>
      {data.map(({ name, country, winner, runnerup }) => (
        <li key={name}>
          {name}, {winner}, {runnerup}, {country || 'N/A'}
        </li>
      ))}
    </ul>
  );
};

const useFootballCompetitions = (year) => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`
        );
        if (!response.ok) throw new Error(`Failed : ${response.status}`);
        const data = await response.json();
        setCompetitions(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [year]);

  return {
    competitions,
    loading,
    error,
  };
};

export const FootballCompetitions = () => {
  const [year, setYear] = useState('2011');
  const { competitions, loading, error } = useFootballCompetitions(year);
  const [data, setData] = useState([]);

  const onChange = (e) => {
    setYear(e.target.value);
  };
  const fetchData = () => {};

  if (loading) return <p>...Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Football Competitions 2011, 2012, and 2013</h1>
      <YearSelector onChange={onChange} year={year} loading={loading} />
      <hr />
      <CompetitionList data={competitions} />
      {!loading && competitions.length === 0 && <p>No competitions found</p>}
      {JSON.stringify()}
    </div>
  );
};

export default FootballCompetitions;

///❌
//<select value={year} onChange={}></select>
//FootballCompetitions
// ├── YearSelector
// └── CompetitionList
