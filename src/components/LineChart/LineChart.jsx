import { LineChart as LChart, Line,XAxis,YAxis} from 'recharts';

const LineChart = () => {
    const mathMarks = [
        { "id": 1, "name": "John", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Emily", "math": 75, "physics": 82, "chemistry": 70 },
        { "id": 3, "name": "David", "math": 90, "physics": 88, "chemistry": 85 },
        { "id": 4, "name": "Sophia", "math": 70, "physics": 75, "chemistry": 80 },
        { "id": 5, "name": "Michael", "math": 88, "physics": 92, "chemistry": 89 },
        { "id": 6, "name": "Olivia", "math": 65, "physics": 70, "chemistry": 72 },
        { "id": 7, "name": "Daniel", "math": 78, "physics": 80, "chemistry": 75 },
        { "id": 8, "name": "Ava", "math": 92, "physics": 88, "chemistry": 93 },
        { "id": 9, "name": "William", "math": 81, "physics": 85, "chemistry": 78 },
        { "id": 10, "name": "Isabella", "math": 73, "physics": 76, "chemistry": 85 }
      ]
      

    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
              <XAxis dataKey='name'/>
              <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>

        </div>
    );
};

export default LineChart;