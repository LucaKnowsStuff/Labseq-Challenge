package org.challenge.Service;

import jakarta.enterprise.context.ApplicationScoped;

import java.math.BigInteger;

@ApplicationScoped

public class ChallengeService {

    private static int MAX = 50000; //Max n

    public static BigInteger[] cache = new BigInteger[MAX]; //Simple array working as a cache
    public  BigInteger calcLabseq(int n) { //Calculates de algorithm given n
        if(n <4) {   //Returns the base cases of n1, n2 , n3 ,n4
            if(n==0 || n==2) {
                return BigInteger.ZERO;
            } else {
                return BigInteger.ONE;
            }
        }

        if (cache[n] != null) {  //Check if cache already contains the result
            return cache[n];
        }
        return cache[n] = calcLabseq(n - 4).add(calcLabseq(n-3)); //Calculate the result recursively ,storing it in cache and return it

    }




}
