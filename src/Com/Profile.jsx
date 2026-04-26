
import React from 'react'

import './profile.css';

function Profile() {
    const storedformData = localStorage.getItem('myFormData');
    const formData1 = JSON.parse(storedformData);

    return (

        <div class="container mt-5 d-flex justify-content-center">

            <div class="card p-3">

                <h3>Account Settings</h3>
                <div class="d-flex align-items-center">
                    <div class="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" class="rounded" width="155" />
                    </div>

                    <div class="ml-3 w-100">

                        <div>

                            <p><b>{formData1.username}</b></p>
                            <p>{formData1.email}</p>

                        </div>

                    </div>


                </div>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic, ut quis repudiandae libero quod! Distinctio suscipit non sit atque?</p>
     
            </div>

        </div>
    )
}

export default Profile
