import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../libs/Api';
import { User } from '../interface/interfaceUser';


const useUpdateProfile = () => {

    const {isLoaded, isSignedIn, user} = useUser();
    if(isLoaded && !isSignedIn) {
        console.log("isSignedIn", isSignedIn);
        
    }

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const queryClient = useQueryClient();



    const {mutate: updateProfile, isPending: isUpdating, isError} = useMutation({
        
        mutationFn: async (body: User) => {
            return await api.post("/user", body);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["avatars"]})
        },
        onError: (error) => {
            console.log("errornya disini", error);
            
        }
    })

  return {
   updateProfile,
   isUpdating,
  }
}

export default useUpdateProfile