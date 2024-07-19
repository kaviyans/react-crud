import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Student from './Student';
import Createstudent from './Createstudent';
import Updatestudent from './Updatestudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />}></Route>
          <Route path='/create' element={<Createstudent />}></Route>
          <Route path='/update/:id' element={<Updatestudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
