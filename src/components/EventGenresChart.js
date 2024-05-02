import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const EventGenresChart = ({events}) =>{
    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map(genre => {
        const filteredEvents = events.filter(event => event.summary.includes(genre))
        return {
            name: genre,
            value: filteredEvents.length
          }
        })
        return data;
      };     
    
      return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label
              outerRadius={130}           
            />
          </PieChart>
        </ResponsiveContainer>
      );
}

export default EventGenresChart