import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { useQuery } from '@tanstack/react-query';
import api from '../libs/Api';

type UserData = {
    id: string;
    username: string;
    email: string;
    avatar: string;
}


const useProfileUser = () => {

    const {isLoaded, isSignedIn, user} = useUser();
    if(isLoaded && !isSignedIn) {
        console.log("isSignedIn", isSignedIn);
        
    }

    const userEmail = user?.primaryEmailAddress?.emailAddress;

    const {data: userData, isLoading, isError} = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const {data} = await api.get("/user");
                return data as UserData;
            } catch (error) {
                console.log("error", error);
                
            }
        }
    })


  return {
    userData,isLoading, isError
  }
}

export default useProfileUser