import * as React from 'react';
import { createClient } from '@supabase/supabase-js'



function MyProfile() {

  const supabase = createClient('https://fjyhzorwyiggzjglhxbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeWh6b3J3eWlnZ3pqZ2xoeGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMTc3MTIsImV4cCI6MTk5NDc5MzcxMn0.YpkAHXhwZrbDWROw4PiuFTe6ePKydhOTPaTJ2h9OIZk')



  const loaddata = async (e) => {

    e.preventDefault();

    try {

        const { data: { user },} = await supabase.auth.getUser()
            
       
    }

    catch (error) {
        alert(error.error_description || error.message);
    }


}


    return (

      <div>

        <p>user</p>
       
       </div>

    );
  }

  export default MyProfile();