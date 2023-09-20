package org.challenge.Controller;


import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.challenge.Service.ChallengeService;

import java.math.BigInteger;

@Path("/labseq")
public class ChallengeController {
    @Inject
    ChallengeService service;


    @GET
    @Path("/{n}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getResult(@PathParam("n") int n) {
        if (n <= 0 || n >= 40000) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Invalid input, value must be an integer between 0 and 40000").build();
        }

        BigInteger res = service.calcLabseq(n);
        return Response.ok(res.toString()).build();
    }
}
