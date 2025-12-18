import PostsPage from "@/pages/posts";
import UsersPage from "@/pages/users";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import NotFound from "@/pages/not-found";
import PostDetailsPage from "@/pages/posts/[id]";
import UserDetailsPage from "@/pages/users/[id]";
import WritePostPage from "@/pages/posts/write";
import EditPostPage from "@/pages/posts/[id]/edit";
import AddUserPage from "@/pages/users/add";
import EditUserPage from "@/pages/users/[id]/edit";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="posts">
                        <Route index element={<PostsPage />} />
                        <Route path="write" element={<WritePostPage />} />
                        <Route path=":id" element={<PostDetailsPage />} />
                        <Route path=":id/edit" element={<EditPostPage />} />
                    </Route>

                    <Route path="users">
                        <Route index element={<UsersPage />} />
                        <Route path=":id" element={<UserDetailsPage />} />
                        <Route path="add" element={<AddUserPage />} />
                        <Route path=":id/edit" element={<EditUserPage />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
