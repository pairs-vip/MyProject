package com.hbjg.system.phoneController;


import com.hbjg.system.pojo.Lendlog;
import com.hbjg.system.utils.R;
import com.hbjg.system.pojo.Returnlog;
import com.hbjg.system.pojo.User;
import com.hbjg.system.service.IReturnlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/phonereturnlogs")
public class PhoneReturnlogController {

    @Autowired
    private IReturnlogService iReturnlogService;

    //查看所有归还纪录分页
//    @GetMapping
//    public R getReturnlogMyPage(){
//        return new R(true,iReturnlogService.getReturnlogMyPage(1,10,null));
//    }


    //当前登录用户进行归还操作
    @PostMapping
    public R saveReturnLog(@RequestBody Returnlog returnlog,HttpSession session){
        User user = (User)session.getAttribute("user");
        if(user!=null){
            returnlog.setUid1(user.getUid());
        }
        return new R(true,20000,iReturnlogService.save(returnlog));
    }

    //修改未同意为已同意
//    @PutMapping
//    public R updateStatusByLlid(@RequestBody Returnlog returnlog){
//        return new R(true,iReturnlogService.updateById(returnlog));
//    }


    //通过当前用户查看，将已同意或未同意用作参数传递过来,查看自己归还纪录
    @PostMapping("/getforuser1/{currentPage}/{pageSize}")
    public R getLendForUser1(@PathVariable Integer currentPage, @PathVariable Integer pageSize, HttpSession session, @RequestBody Returnlog returnlog){
        return new R(true,20000,iReturnlogService.getReturnlogForUser1(currentPage,pageSize,returnlog,session));
    }
    //通过当前用户查看，查询审核人是自己的纪录
//    @PostMapping("/getforuser2/{currentPage}/{pageSize}")
//    public R getLendForUser2(@PathVariable Integer currentPage, @PathVariable Integer pageSize, HttpSession session, @RequestBody Returnlog returnlog) {
//        return new R(true, iReturnlogService.getReturnlogForUser2(currentPage, pageSize, returnlog, session));
//    }

    //批量归还
    @PostMapping("/savereturnlogs")
    public R saveReturnlogs(@RequestBody List<Returnlog> returnlogs, HttpSession session){
        User user = (User) session.getAttribute("user");
        if(user!=null){
            for (Returnlog returnlog : returnlogs) {
                returnlog.setUid1(user.getUid());
                iReturnlogService.save(returnlog);
            }
        }
        return new R(true,20000,"归还纪录添加成功");
    }
}
