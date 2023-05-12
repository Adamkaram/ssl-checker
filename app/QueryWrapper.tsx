"use client";

import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { ReactNode } from 'react';
import {Toaster} from 'react-hot-toast'

const queryClient = new QueryClient();
interface props {
    children? : ReactNode
}
const  QueryWrapper = ({ children } : props) => (
    <QueryClientProvider client={queryClient}>
        <Toaster
        //  toastOptions={{
        //     success: {
        //       style: {
        //         background: 'green',
        //       },
        //     },
        //     error: {
        //       style: {
        //         background: 'red',
        //       },
        //     },
        //   }}
        />
        {children}
    </QueryClientProvider>
) 
export default QueryWrapper;