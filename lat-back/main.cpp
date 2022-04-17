/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: cesarminhoz <cesarminhoz1@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/04/17 02:26:45 by cesarminhoz       #+#    #+#             */
/*   Updated: 2022/04/17 02:26:45 by cesarminhoz      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <sys/socket.h>
#include <unistd.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <string.h>

#define PORT 3334
int main(int argc, char const *argv[])
{
    int server; 
    int newSocket; 
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    char buffer[30000];
    
    char const *hello = "HTTP/1.1 200 OK\n"
                        "Content-Type: text/html\n"
                        "Content-Length:\n\n"
                        "<center><h1>lat say hello</h1></center>";
    
    if (( server= socket(AF_INET, SOCK_STREAM, 0)) == 0){
        perror("error in create a socket\n");
        exit(EXIT_FAILURE);
    }
    

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons( PORT );
    
    memset(address.sin_zero, '\0', sizeof address.sin_zero);
    
    
    if (bind(server, (struct sockaddr *)&address, sizeof(address))<0)
    {
        perror("error in bind\n");
        exit(EXIT_FAILURE);
    }
    if (listen(server, 10) < 0)
    {
        perror("error in listen");
        exit(EXIT_FAILURE);
    }
    while(1)
    {

        if ((newSocket = accept(server, (struct sockaddr *)&address, (socklen_t*)&addrlen))<0)
        {
            perror("error in accept");
            exit(EXIT_FAILURE);
        }
        
        read( newSocket , buffer,3000);
        printf("%s \n", buffer);
        write(newSocket , hello , strlen(hello));
        close(newSocket);
    }
    return 0;
}