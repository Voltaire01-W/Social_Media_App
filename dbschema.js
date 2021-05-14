let db = {
    users: [
        {
            userId: 'wivnsfhnvksecin3498',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2021-05-13T10:40:52.798Z',
            imageUrl: 'image/invsfnjhn/vnifgn',
            bio: 'Hello, My name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Medellin, Colombia'
        }
    ],
    posts: [
        {
            userHandle: 'user',
            body: 'this is the post body',
            createdAt: "2021-05-12T14:28:37.234Z",
            likeCount: 5,
            commentCount: 2,
        }
    ],
    comments: [
        {
            userHandle: 'user',
            postId: 'wivnwfvrsknfv',
            body: 'Nice one!',
            createdAt: '2021-05-13T10:59:59.789Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            postId: 'wvjfkvnkjsn',
            type: 'like | comment',
            createdAt: '2021-05-13T10:59:59.789Z'
        }
    ]
};

const userDetails = {
    credentials: {
        userId: 'IVNDFNVKSJFNVKSJN',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2021-05-13T10:59:52.789Z',
        imageUrl: 'image/vijnivn/viwnvijsn',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Medellin, Colombia'
    },
    likes: [
        {
            userHandle: 'user',
            postId: 'ivsfvnksvsdvergbv'
        },
        {
            userHandle: 'user',
            postId: 'vnfkvjnjvjnrjhvn'
        }
    ]
};